import PropTypes from 'prop-types';

export default function WebsiteFavicon({ domainName, size = 32 }) {
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${domainName}&sz=${size}`;

  return <img src={faviconUrl} alt={`${domainName} favicon`} width={size} height={size} />;
};

WebsiteFavicon.propTypes = {
  domainName: PropTypes.string.isRequired,
  size: PropTypes.number
};


