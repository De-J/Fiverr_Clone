const upload = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "fiver");

    try {
        const res = await axios.post("", data);
        const { url } = res.data;
    }
    catch(err) {
        console.log(err);
    }
};

export default upload;
