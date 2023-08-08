import React from 'react';
import { BlockDataForm, SidebarPortal } from '@plone/volto/components';
import { getBaseUrl } from '@plone/volto/helpers';
import VimeoBlockSchema from './schema';
import VimeoBlockView from './VimeoBlockView';
import './css/vimeoblock.less';

const VimeoBlockEdit = (props) => {
  const { block, onChangeBlock, data = {}, selected } = props;
  const schema = VimeoBlockSchema(props);

  return (
    <>
      <VimeoBlockView
        {...props}
        path={getBaseUrl(props.pathname)}
        mode="edit"
      />

      <SidebarPortal selected={selected}>
        <BlockDataForm
          key={Object.keys(data?.cards || {}).length}
          schema={schema}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          formData={data}
        />
      </SidebarPortal>
    </>
  );
};
export default VimeoBlockEdit;
