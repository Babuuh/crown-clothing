import React, { Component } from "react";
import MenuItem from "../menu-items/menu-items";
import "./directory.styles.scss";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://images.pexels.com/photos/5699007/pexels-photo-5699007.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "jackets",
          imageUrl: "https://image.shutterstock.com/image-photo/kids-warm-puffer-jacket-yellow-260nw-2048868983.jpg",
          id: 2,
          linkUrl: "jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://burst.shopifycdn.com/photos/new-shoes.jpg?width=373&format=pjpg&exif=1&iptc=1",
          id: 3,
          linkUrl: "sneakers",
        },
        {
          title: "womens",
          imageUrl: "https://burst.shopifycdn.com/photos/model-in-gold-fashion.jpg?width=373&format=pjpg&exif=1&iptc=1",
          size: "large",
          id: 4,
          linkUrl: "womens",
        },
        {
          title: "mens",
          imageUrl: "https://burst.shopifycdn.com/photos/man-in-white-and-light-tan-outfit.jpg?width=373&format=pjpg&exif=1&iptc=1",
          size: "large",
          id: 5,
          linkUrl: "mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, imageUrl,size}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
        ))}
      </div>
    );
  }
}

export default Directory;
