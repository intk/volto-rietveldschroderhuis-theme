import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import cx from 'classnames';
import BlockRenderer from './BlockRenderer';
import { withBlockExtensions } from '@plone/volto/helpers';
import config from '@plone/volto/registry';
import './css/videopageblock.less';

const ViewGrid = (props) => {
  const { data, path, className } = props;
  const blocksConfig =
    config.blocks.blocksConfig.__grid.blocksConfig || props.blocksConfig;
  useEffect(() => {
    const elements = document.querySelectorAll('.grid-block-text');
    elements.forEach((el) => {
      const p = el.querySelector('p');
      if (
        (p && p.childNodes.length === 1 && p.childNodes[0].nodeName === 'BR') ||
        (el.childNodes.length === 1 && el.childNodes[0].nodeName === 'BR')
      ) {
        el.style.height = '0';
        el.style.padding = '0';
        el.style.margin = '0';
      }
    });
  }, []);

  return (
    <div
      className={cx(
        'block __grid',
        {
          [data['@type']]: data['@type'] !== '__grid',
          right: data.align === 'right' || data.align === undefined,
          // 'space-between': data.align === 'space-between',
          // 'centered-text': data.centeredText,
          one: data?.columns?.length === 1,
          two: data?.columns?.length === 2,
          three: data?.columns?.length === 3,
          four: data?.columns?.length === 4,
        },
        className,
      )}
      id="quote-block-wrapper"
    >
      {data.headline && <h2 className="headline">{data.headline}</h2>}

      <Grid stackable stretched columns={data.columns.length}>
        {data.columns.map((column) => (
          <Grid.Column
            key={column.id}
            className={`grid-block-${column['@type']} ${data.align}`}
          >
            <BlockRenderer
              block={column.id}
              id={column.id}
              type={column['@type']}
              data={column}
              path={path}
              blocksConfig={blocksConfig}
            />
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ViewGrid.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withBlockExtensions(ViewGrid);
