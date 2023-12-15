export default function EllaKey({imgPose,imgSize,scale}){
    const url = 'https://kr.object.ncloudstorage.com/deokisys/image/ella2-2.png';
    return <div className="ellaKey" style={{
        backgroundImage:`url('${url}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `${imgPose[0]*scale}px ${imgPose[1]*scale}px`,
        backgroundSize: `${imgSize[0]*scale}px ${imgSize[1]*scale}px`
        }}>
    </div>
}