const titleStyle = {
  color: 'rgb(45, 51, 63)',
  fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
  // fontFamily: '"Josefin Sans", serif',
  fontSize: '24px',
  margin: '0px 0px 15px 0px',
  padding: '0px 0px 15px 0px',
  borderBottomStyle: 'solid',
  borderColor: 'rgb(200,200,200)',
  borderWidth: '0.8px',
};

const Title = (props) => (
  <div className="title" style={titleStyle}>
    <h1>{props.title.title}</h1>
  </div>
);

export default Title;