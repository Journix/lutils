//base64转 bob文件
function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type:mimeString});
}

//axios发送 file
//avatar_file.type==> 'image/png'
let avatar_file = dataURItoBlob(res);
let avatar_filename = 'avatar'+'.'+avatar_file.type.split('/')[1];
let formdata = new FormData();
formdata.append('file',avatar_file,avatar_filename)
axios.request({
        url: UPLOAD_AVATAR,
        method: 'post',
        headers: {
            'version': 'v2.0',
            'access-token': self.user_token,
            'Content-Type': 'multipart/form-data'
        },
        data:formdata
    })
    .then((resp) => {
        let res = resp.data;
        if (res.code == 1) {
            self.$toast.center('头像上传成功');
            self.photo = res.data.fileUrl;
        } else {
            self.$toast.center(res.msg);
        }
    })
    .catch((err) => {
        self.$toast.center(err);
        console.log(err);
});