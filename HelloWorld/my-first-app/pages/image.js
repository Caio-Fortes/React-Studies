const imageOptions = {
    url: "https://www.springboard.com/blog/wp-content/uploads/2022/06/coding.png",
    imageSize: 90,
}

export default function Image(){
    return (
        <>
            <img src={imageOptions.url} 
                style={{
                    width: imageOptions.imageSize,
                    height: imageOptions.imageSize
                }} 
            />
        </>
    )
}