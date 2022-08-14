import React, { Component } from "react";

class ImageCard extends Component {
   constructor(props) {
      super(props);
      this.imageRef = React.createRef();
      this.state = { span: 0 };
   }

   setSpan = () => {
      const height = this.imageRef.current.clientHeight;

      const span = Math.ceil(height / 5);
      this.setState({ span: span });
   };

   componentDidMount() {
      this.imageRef.current.addEventListener("load", this.setSpan);
   }

   render() {
      const { urls, alt_description: changeName } = this.props.imageData; //destructure with change variable name

      return (
         <div className="card-result" style={{ gridRowEnd: `span ${this.state.span}` }}>
            <a href={urls.regular}>
               <img src={urls.regular} alt={changeName} ref={this.imageRef} />
            </a>
         </div>
      );
   }
}

export default ImageCard;
