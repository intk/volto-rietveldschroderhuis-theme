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
  const contentData = useSelector((state) => state.content.data);

  const preview_image = contentData?.preview_image; // || subrequest?.data?.preview_image;

  return preview_image;
};

export default usePreviewImage;
