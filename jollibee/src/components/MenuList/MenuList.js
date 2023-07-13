import styles from './MenuList.module.scss';
import classNames from 'classnames/bind';
import { categoryService } from '~/services';
import { useEffect, useState } from 'react';
import * as actions from '~/redux/action';
import { connect } from 'react-redux';

const cx = classNames.bind(styles);

function MenuList(props) {
    const [arrCategory, setArrCategory] = useState([]);

    const getAllCategoryFromReact = async () => {
        const response = await categoryService.getAllCategory();
        if (response && response.data.errCode === 0) {
            setArrCategory(response.data.categories);
        }
    };

    useEffect(() => {
        getAllCategoryFromReact();
    }, []);
    return (
        <ul className={cx('wrapper')}>
            {arrCategory.map((item, index) => (
                <li className={cx('category-item')} key={index} onClick={() => props.SELECT_CATEGORY(item.id)}>
                    <div>
                        <img
                            className={cx('thumbnail')}
                            src={`${process.env.REACT_APP_BACKEND_URL}/${item.image}`}
                            alt={item.valueEn}
                        />
                        <span className={props.category.categoryId === item.id ? cx('active') : ''}>{item.name}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
}

const mapStateToProps = (state) => {
    return {
        category: state.category,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        SELECT_CATEGORY: (categoryId) => dispatch(actions.selectCategory(categoryId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
