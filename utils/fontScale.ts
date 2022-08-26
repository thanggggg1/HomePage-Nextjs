import UseWindowSize from "../utils/useWindowSize";

export const fontScale = (fontSize:number)=>{
    const {width} = UseWindowSize();
    if (width){
        if (width > 1536) return fontSize; //2xl screen  :1536
        if (width > 1279 && width < 1537) return fontSize * 0.9; //xl screen 1280-1536
        if (width > 1023 && width < 1281) return fontSize * 0.8; //xl screen 1024 - 1280
        if (width > 767 && width < 1025) return fontSize * 0.7; //lg screen 768 -1024
        if (width > 639 && width < 769) return fontSize * 0.6; //xl screen 640 768
        if(width < 641) return fontSize * 0.6;//sm screen
    }
    return fontSize
}