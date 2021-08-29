import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table } from "reactstrap";

export default function BaiTapBurger() {
  const { burger, menu, total } = useSelector((state) => state.burger);
  const dispatch = useDispatch();

  const renderBreadMid = () => {
    return Object.entries(burger).map(([propsBurger, value], index) => {
      let breadMid = [];
      for (let i = 0; i < value; i++) {
        breadMid.push(<div key={i} className={propsBurger}></div>);
      }
      return breadMid;
    });
  };

  const addBreadMid = (propsBurger, amount) => {
    const action = {
      type: "ADD_BREADMID",
      propsBurger,
      amount,
    };
    dispatch(action);
  };

  const renderMenu = () => {
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{propsMenu}</td>
          <td>
            {" "}
            <Button
              color="success"
              className="mr-2"
              onClick={() => {
                addBreadMid(propsMenu, 1);
              }}
            >
              +
            </Button>
            <b>{burger[propsMenu]}</b>
            <Button
              color="danger"
              className="ml-2"
              onClick={() => {
                addBreadMid(propsMenu, -1);
              }}
            >
              -
            </Button>
          </td>
          <td>{price}</td>
          <td>{burger[propsMenu] * price}</td>
        </tr>
      );
    });
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-6 text-center">
          <div>
            <h1>Cửa hàng burger cybersoft</h1>
            <div className="breadTop"></div>
            {renderBreadMid()}
            <div className="breadBottom"></div>
          </div>
        </div>
        <div className="col-sm-6 text-center">
          <h3>Chọn thức ăn</h3>
          <Table>
            <thead>
              <tr>
                <th>Thức ăn</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
              </tr>
              {renderMenu()}
            </thead>
            <tfoot>
              <tr>
                <td colSpan="2"></td>
                <td>Tổng tiền</td>
                <td>
                  <b>{total}</b>
                </td>
              </tr>
            </tfoot>
          </Table>
        </div>
      </div>
    </div>
  );
}
