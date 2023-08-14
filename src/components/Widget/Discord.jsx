//import { h } from 'preact';
const Discord = ({width = string, height = string}) => {
	return (
        
        <div>
            <iframe src="https://discord.com/widget?id=342732838598082562&theme=dark" width={width || 350} height={height || 500} allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" title="Discord Iframe" />
        </div>

        );
}

export default Discord;
