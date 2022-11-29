import PostcardImage from "./PostcardImage";
import PostcardText from "./PostcardText";

function Article({imageSrc, text, title}) {
    
    return (
        <div className="article">
            <PostcardImage imageSrc={imageSrc} />
            <PostcardText title={title} text={text} />
        </div>
    )
}
export default Article;