import PostcardImage from "./PostcardImage";
import PostcardText from "./PostcardText";


function Postcard({imageSrc, text, title, isDarkMode}) {
    
    return (
        <div className={`postcard ${isDarkMode ? 'darkmode':''}`}>
            <PostcardImage imageSrc={imageSrc} />
            <PostcardText title={title} text={text} />
            
        </div>
        
    )
}
export default Postcard;