const AddUser = () => {
    return (
        <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 pt-50 main">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Thêm Thành viên</h1>
                </div>
            </div>
            {/*/.row*/}
            <div className="row">
                <div className="col-xs-12 col-md-12 col-lg-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <i className="fas fa-user" /> Thêm thành viên
                        </div>
                        <div className="panel-body">
                            <div className="row justify-content-center" style={{ marginBottom: 40 }}>
                                <div className="col-md-8 col-lg-8 col-lg-offset-2">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" name="email" className="form-control" />
                                        <div className="alert alert-danger" role="alert">
                                            <strong>email đã tồn tại!</strong>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>password</label>
                                        <input type="text" name="password" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Full name</label>
                                        <input type="full" name="full" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input type="address" name="address" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="phone" name="phone" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Level</label>
                                        <select name="level" className="form-control">
                                            <option value={1}>admin</option>
                                            <option selected value={2}>
                                                user
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8 col-lg-8 col-lg-offset-2 text-right">
                                        <button className="btn btn-success" type="submit">
                                            Thêm thành viên
                                        </button>
                                        <button className="btn btn-danger" type="reset">
                                            Huỷ bỏ
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>
            {/*/.row*/}
        </div>
    );
};

export default AddUser;
