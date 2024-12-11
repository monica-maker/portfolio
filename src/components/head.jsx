import "/src/components/styles/head.css";
import StarRateIcon from '@mui/icons-material/StarRate';

export default function HeaderDiv(){
    return(
        <>
            <div className="container1">
                <div className="text1">
                    <p>HEY, I AM MONICA, A CREATIVE UI/UX DESIGNER AND DEVELOPER.</p>
                    <div className="break">
                        <StarRateIcon className="stars"/><span>Designer</span><StarRateIcon className="stars"/><span>Figma</span><StarRateIcon className="stars"/><span>Developer</span>
                    </div>
                        <button className="button1">Want to discuss?</button>
                        <button className="button2">Let's Talk</button>
                </div>

                <div className="img">
                    <img src="/src/components/assets/png-min.png" alt="profil pic" />
                </div>
            </div>
            <div className="container2">
            <StarRateIcon className="stars"/><span>UI/UX</span><StarRateIcon className="stars"/><span>DEVELOPMENT</span><StarRateIcon className="stars"/><span>PRODUCT DESIGN</span><StarRateIcon className="stars"/><span>SOCIAL MEDIA DESIGN</span><StarRateIcon className="stars"/><span>BRANDING</span>
            </div>
        </>
    )

}