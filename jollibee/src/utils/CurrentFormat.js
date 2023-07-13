const CurrentFormat = (value) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value*1000);
}
 
export default CurrentFormat;