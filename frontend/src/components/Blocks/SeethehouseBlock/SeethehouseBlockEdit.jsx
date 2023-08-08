import React from 'react';
import { BlockDataForm, SidebarPortal } from '@plone/volto/components';
import { getBaseUrl } from '@plone/volto/helpers';
import seethehouseSchema from './schema';
import VimeoBlockView from './SeethehouseBlockView';
import './css/seethehouse.less';

const SeethehouseBlockEdit = (props) => {
  const { block, onChangeBlock, data = {}, selected } = props;
  const schema = seethehouseSchema(props);

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
export default SeethehouseBlockEdit;
