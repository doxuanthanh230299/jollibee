import { useState } from 'react';
import styles from './MenuStick.module.scss';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import * as actions from '~/redux/action';

const cx = classNames.bind(styles);

function MenuStick(props) {
    return (
        <ul className={cx('wrapper')}>
            {props.arrCategory.map((item, index) => (
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuStick);
