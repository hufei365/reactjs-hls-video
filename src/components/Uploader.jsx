import { up } from 'up-fetch'

const upfetch = up(fetch, () => ({
    baseUrl: document.URL
}))

function Uploader({ onUpdate }) {

    const onChange = async event => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('video', file);
        formData.append('title', `tttestupload`);
        const data = await upfetch('/upload', {
            method: "POST",
            body: formData
        });
        const videoOnline = `http://localhost:3000/video/${data.chapterId}/output.m3u8`
        onUpdate(videoOnline)
    }
    return (<>
        <h4>选择一个视频文件：</h4>
        <input type="file" onChange={onChange} />
    </>)
}

export default Uploader