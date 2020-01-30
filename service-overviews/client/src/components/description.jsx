const descriptionStyle = {
  color: 'rgb(45, 51, 63)',
  fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
  // fontFamily: '"Josefin Sans", serif',
  fontWeight: '400',
  fontSize: '18px',
};

const Description = (props) => (
  props.description.description !== undefined ?
    <div className="description" style={descriptionStyle}>
      {props.description.description.split('\n').map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
      {/* does 'read more' button goes to this component? */}
    </div>
    :
    <div className="post loading">Loading...</div>
);

export default Description;