import PropTypes from 'prop-types';

const EmptyData = ({ type }) => {
  const messages = {
    emptyNotes: '⚠️ Notes is empty!',
    emptyArchive: '⚠️ Archive is empty!',
    notFound: '🚫 Not Found!',
  };

  return (
    <div className="flex items-center justify-center mt-36 lg:mt-56">
      <p className="text-xl">{messages[type]}</p>
    </div>
  );
};

EmptyData.propTypes = {
  type: PropTypes.string,
};

export default EmptyData;
