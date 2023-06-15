import { useSelector } from 'react-redux';
// import { flattenToAppURL } from '@plone/volto/helpers';

// const parent = (path) => {
//   if (!path) return;

//   const bits = path.split('/');
//   if (bits.length < 2) return;

//   const parentBits = bits.slice(0, bits.length - 1);
//   return parentBits.join('/');
// };

const usePreviewImage = (pathname) => {
  // const dispatch = useDispatch();
  const contentData = useSelector((state) => state.content.data);
  // const contentId = flattenToAppURL(contentData?.['@id'] || '');
  // const subrequestId = `${contentId}-preview_image_request}`;
  // const subrequest = useSelector(
  //   (state) => state.content.subrequests?.[subrequestId],
  // );
  const preview_image = contentData?.preview_image; // || subrequest?.data?.preview_image;

  // const parentPath = parent(
  //   subrequest?.data
  //     ? flattenToAppURL(subrequest.data['@id'])
  //     : flattenToAppURL(contentData?.['@id']),
  // );
  //
  // React.useEffect(() => {
  //   if (!preview_image && parentPath) {
  //     dispatch(getContent(parentPath, null, subrequestId));
  //   }
  // }, [preview_image, parentPath, dispatch, subrequestId]);

  return preview_image;
};

export default usePreviewImage;
