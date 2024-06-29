import { message } from "antd";

// Upload Docs Functions
export const uploadDegreeProps = {
    name: 'Degree',
    // Change action to POST request - Uploading
    action: 'https://run.mocky.io/v3/5468ec21-50ac-4d1f-8ecc-50109f644aa0',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

export const uploadAgreementProps = {
    name: 'Agreement',
    action: 'https://run.mocky.io/v3/5468ec21-50ac-4d1f-8ecc-50109f644aa0',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

export const uploadClientProps = {
    name: 'Client',
    action: 'https://run.mocky.io/v3/5468ec21-50ac-4d1f-8ecc-50109f644aa0',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};