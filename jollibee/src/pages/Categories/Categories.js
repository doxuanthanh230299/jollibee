import { useEffect, useState } from 'react';
import { createNewCategory, deleteCategory, getAllCategory } from '~/services/Api';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [input, setInput] = useState({});
    const [message, setMessage] = useState('');
    const handleOnChangeInput = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };
    const handleDelete = (inputId) => {
        var result = window.confirm('Want to delete?');
        if (result) {
            deleteCategory({ data: { id: inputId } }).then(({ data }) => {
                console.log(data);
                setMessage('Delete');
                setTimeout(() => {
                    return setMessage('');
                }, 1000);
            });
        }
    };
    const handleEdit = (data) => {
        setInput({
            id: data.id,
            name: data.name,
            // image: null,
        });
    };

    const handleSubmit = () => {
        createNewCategory(
            {
                name: input.name,
                image: input.image,
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            },
        ).then(({ data }) => {
            if (data.errCode !== 0) {
                setMessage(false);
                setTimeout(() => {
                    return setMessage('');
                }, 3000);
            } else {
                setInput({
                    name:'',
                });
                setMessage(true);
                setTimeout(() => {
                    return setMessage('');
                }, 3000);
            }
        });
    };
    useEffect(() => {
        getAllCategory().then(({ data }) => {
            setCategories(data.categories);
        });
    }, [message]);
    return (
        <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
            <div className="row">
                <ol className="breadcrumb">
                    <li>
                        <a href="#">
                            <svg className="glyph stroked home">
                                <use xlinkHref="#stroked-home" />
                            </svg>
                        </a>
                    </li>
                    <li className="active">Danh mục</li>
                </ol>
            </div>
            {/*/.row*/}
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Quản lý danh mục</h1>
                </div>
            </div>
            {/*/.row*/}
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="form-group">
                                        <label htmlFor>Tên Danh mục</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            id
                                            placeholder="Tên danh mục mới"
                                            value={input?.name}
                                            onChange={handleOnChangeInput}
                                        />
                                        <input
                                            type="file"
                                            className="form-control"
                                            name="image"
                                            onChange={(e) => setInput({ ...input, image: e.target.files[0] })}
                                        />
                                        {message === false ? (
                                            <div className="alert bg-danger" role="alert">
                                                <svg className="glyph stroked cancel">
                                                    <use xlinkHref="#stroked-cancel" />
                                                </svg>
                                                Tên danh mục đã tồn tại!
                                                <a href="#" className="pull-right">
                                                    <span className="glyphicon glyphicon-remove" />
                                                </a>
                                            </div>
                                        ) : null}
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                                        Thêm danh mục
                                    </button>
                                </div>
                                <div className="col-md-7">
                                    {message === true ? (
                                        <div className="alert bg-success" role="alert">
                                            <svg className="glyph stroked checkmark">
                                                <use xlinkHref="#stroked-checkmark" />
                                            </svg>{' '}
                                            Đã thêm danh mục thành công!{' '}
                                            <a href="#" className="pull-right">
                                                <span className="glyphicon glyphicon-remove" />
                                            </a>
                                        </div>
                                    ) : null}
                                    <div className="vertical-menu">
                                        <div className="item-menu active">Danh mục </div>

                                        {categories.map((category) => (
                                            <div className="item-menu">
                                                <span>{category.name}</span>
                                                <div className="category-fix">
                                                    <button
                                                        className="btn-category btn-primary"
                                                        onClick={() => handleEdit(category)}
                                                    >
                                                        <i className="fa fa-edit" />
                                                    </button>
                                                    <button
                                                        className="btn-category btn-danger"
                                                        onClick={() => handleDelete(category.id)}
                                                    >
                                                        <i className="fas fa-times" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*/.col*/}
            </div>
            {/*/.row*/}
        </div>
    );
};

export default Categories;
