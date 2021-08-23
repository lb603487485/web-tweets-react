import { Carousel } from 'react-carousel-minimal';
import {IMAGE_WIDTH, IMAGE_HEIGHT} from '../../config';

const TweetImages = (props) => {
    const data = [];
    const imageResize = `-/smart_resize/${IMAGE_WIDTH}x${IMAGE_HEIGHT}/`; // sample '-/resize/10x/'
    if (props.imageUrl){
        data.push({
            image: `${props.imageUrl}${imageResize}`,
            caption: '',
        });
    }
    if (props.imageGroup){
        const groupUrl = props.imageGroup.split('~');
        const groupSize = groupUrl[groupUrl.length - 1][0];
        for (let i = 0; i < Number(groupSize); i++){
            data.push({
                image: `${props.imageGroup}/nth/${i}/${imageResize}`,
                caption: '',
            });
        }
    }
    // {
    //   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    //   caption: "San Francisco"
    // },


    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (<Carousel
                data={data}
                time={5000}
                width={`${IMAGE_WIDTH}px`}
                height={`${IMAGE_HEIGHT}px`}
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                textAlign: "center",
                maxWidth: "520px",
                maxHeight: "480px",
                margin: "0px auto",
                }}
            />
  );
}

export default TweetImages;