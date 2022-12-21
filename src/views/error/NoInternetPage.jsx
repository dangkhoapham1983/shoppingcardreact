import { useScrollTop } from '@/hooks';
import React from 'react';

const NoInternet = () => {
  useScrollTop();

  return (
    <div className="page-not-found">
      <h1>:( No Internet Connection.</h1>
      <p>Vui lòng kiểm tra kết nối mạng của bạn và Thử lại.</p>
      <br />
      <button
        className="button"
        onClick={() => window.location.reload(true)}
        type="button"
      >
        Thử lại
      </button>
    </div>

  );
};

export default NoInternet;
