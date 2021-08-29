import React from 'react';
import { useSelector } from 'react-redux';
import Resizer from "react-image-file-resizer";
import axios from 'axios';

const FileUpload = ({ values, setValues, setLoading }) => {
    const { user } = useSelector((state) => ({ ...state }));

    const fileUploadAndResize = (e) => {
        // console.log(e.target.files);
        // resize
        let files = e.target.files;
        let allUploadedFiles = values.images;

        if (files) {
            setLoading(true);
            for (let i = 0; i < files.length; i++) {
                Resizer.imageFileResizer(
                    files[i],
                    720,
                    720,
                    'JPEG',
                    100,
                    0,
                    (uri) => {
                        // console.log(uri);
                        axios
                          .post(
                            'http://localhost:3333/cloudinary/uploadimages',
                            { image: uri },
                            {
                              headers: {
                                authtoken: user ? user.token : "",
                              },
                            }
                          )
                          .then((res) => {
                            console.log("IMAGE UPLOAD RES DATA", res);
                            setLoading(false);
                            allUploadedFiles.push(res.data);
            
                            setValues({ ...values, images: allUploadedFiles });
                          })
                          .catch((err) => {
                            setLoading(false);
                            console.log("CLOUDINARY UPLOAD ERR", err);
                          });
                      },
                      "base64"
                );
            }
        }
        // send back to server cloudinary
        // set url to images[] in the parent component product create
    };

    return (
        <div className="m-5">
            <label className="px-4 py-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow cursor-pointer hover:bg-gray-100">
                Choose File
                <input
                    onChange={fileUploadAndResize}
                    type="file"
                    multiple
                    accept="images/*"
                    name="product_img"
                    hidden
                    placeholder="upload product sample image"
                />
            </label>
        </div>
    );
};

export default FileUpload;