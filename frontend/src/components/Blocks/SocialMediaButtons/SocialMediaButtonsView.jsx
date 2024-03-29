import { injectIntl } from 'react-intl';
import './css/socialmediablock.less';

const SocialMediaButtonsView = (props) => {
  const handleFacebookShareClick = (e) => {
    e.preventDefault();
    const shareURL =
      'https://www.facebook.com/sharer/sharer.php?u=' +
      encodeURIComponent(window.location.href);
    const width = 600;
    const height = 400;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    window.open(
      shareURL,
      'Popup',
      `width=${width},height=${height},left=${left},top=${top}`,
    );
  };

  const handleTwitterShareClick = (e) => {
    e.preventDefault();
    const shareText = 'Rietveld Schröderhuis: ';
    const shareURL =
      'https://twitter.com/intent/tweet?text=' +
      encodeURIComponent(shareText) +
      encodeURIComponent(window.location.href);

    const width = 600;
    const height = 400;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    window.open(
      shareURL,
      'Popup',
      `width=${width},height=${height},left=${left},top=${top}`,
    );
  };

  const handleMailShareClick = (e) => {
    e.preventDefault();
    const shareText = 'Rietveld Schröderhuis: ';
    const shareURL =
      'mailto:?subject=Rietveld Schröderhuis&body=' +
      encodeURIComponent(shareText) +
      encodeURIComponent(window.location.href);
    window.open(shareURL);
  };

  return (
    <div id="social-media-block">
      <div className="text">
        <h3>DEEL DIT VERHAAL</h3>
      </div>
      <div className="buttons">
        <a
          className="popup"
          href="https://www.facebook.com/sharer/sharer.php?u=https://www.rietveldschroderhuis.nl"
          onClick={handleFacebookShareClick}
        >
          <svg
            className="button"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 155.139 155.139"
            style={{ enableBackground: 'new 0 0 155.139 155.139' }}
            width="28px"
            height="28px"
          >
            <g>
              <path
                id="f_1_"
                d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184   c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452   v20.341H37.29v27.585h23.814v70.761H89.584z"
              />
            </g>
          </svg>
        </a>
        <a
          className="popup"
          href="https://twitter.com/intent/tweet?text=Rietveld Schröderhuis: https://www.rietveldschroderhuis.nl"
          onClick={handleTwitterShareClick}
        >
          <svg
            className="button"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
          >
            <path d="M24.253 8.756C24.69 17.08 18.297 24.182 9.97 24.62c-3.122.162-6.22-.646-8.86-2.32 2.702.18 5.375-.648 7.507-2.32-2.072-.248-3.818-1.662-4.49-3.64.802.13 1.62.077 2.4-.154-2.482-.466-4.312-2.586-4.412-5.11.688.276 1.426.408 2.168.387-2.135-1.65-2.73-4.62-1.394-6.965C5.574 7.816 9.54 9.84 13.802 10.07c-.842-2.738.694-5.64 3.434-6.48 2.018-.624 4.212.043 5.546 1.682 1.186-.213 2.318-.662 3.33-1.317-.386 1.256-1.248 2.312-2.4 2.942 1.048-.106 2.07-.394 3.02-.85-.458 1.182-1.343 2.15-2.48 2.71z" />
          </svg>
        </a>
        <a
          className="popup"
          href="mailto:?subject=Rietveld Schröderhuis&body=https://www.rietveldschroderhuis.nl"
          onClick={handleMailShareClick}
        >
          <svg
            className="button"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
          >
            <path d="M20.11 26.147c-2.335 1.05-4.36 1.4-7.124 1.4C6.524 27.548.84 22.916.84 15.284.84 7.343 6.602.45 15.4.45c6.854 0 11.8 4.7 11.8 11.252 0 5.684-3.193 9.265-7.398 9.3-1.83 0-3.153-.934-3.347-2.997h-.077c-1.208 1.986-2.96 2.997-5.023 2.997-2.532 0-4.36-1.868-4.36-5.062 0-4.75 3.503-9.07 9.11-9.07 1.713 0 3.7.4 4.6.972l-1.17 7.203c-.387 2.298-.115 3.3 1 3.4 1.674 0 3.774-2.102 3.774-6.58 0-5.06-3.27-8.994-9.304-8.994C9.05 2.87 3.83 7.545 3.83 14.97c0 6.5 4.2 10.2 10 10.202 1.987 0 4.09-.43 5.647-1.245l.634 2.22zM16.647 10.1c-.31-.078-.7-.155-1.207-.155-2.572 0-4.596 2.53-4.596 5.53 0 1.5.7 2.4 1.9 2.4 1.44 0 2.96-1.83 3.31-4.088l.592-3.72z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default injectIntl(SocialMediaButtonsView);
