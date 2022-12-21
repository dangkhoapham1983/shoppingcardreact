import { ArrowRightOutlined } from '@ant-design/icons';
import { MessageDisplay } from '@/components/common';
import { ProductShowcaseGrid } from '@/components/product';
import { FEATURED_PRODUCTS, RECOMMENDED_PRODUCTS, SHOP } from '@/constants/routes';
import {
  useDocumentTitle, useFeaturedProducts, useRecommendedProducts, useScrollTop
} from '@/hooks';
import bannerImg from '@/images/banner-girl.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation, Trans } from 'react-i18next';
//import i18n from './i18n';

const Home = () => {
  useDocumentTitle('khoapham | Home');
  useScrollTop();

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useFeaturedProducts(6);
  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingRecommended,
    error: errorRecommended
  } = useRecommendedProducts(6);

  return (
    <main className="content">
      <div className="home">
        <div className="banner">
          <div className="banner-desc">
            <h1 className="text-thin">
              <strong>Đồ</strong>
              &nbsp;Ăn vặt&nbsp;
              <strong>Online</strong>
            </h1>
            <p>
              Mua đồ ăn vặt sẽ khiến bạn vui vẻ và ưa nhìn, tiền rủng rỉnh trong túi. Nhu cầu ăn vặt giữa giờ hay vào xế chiều của dân công sở, các bạn học sinh, sinh viên ngày càng tăng cao. Tuy nhiên, vì đang trong giờ học, giờ làm, thời gian ăn uống hạn chế khiến họ khó có thể ra ngoài mua đồ nên dần hình thành thói quen đặt đồ ăn online trên mạng. Hơn nữa, vấn đề vệ sinh an toàn thực phẩm tại các hàng quán vỉa hè, các xe đẩy lề đường đang trở nên nhức nhối nên những người thích ăn vặt mong muốn tìm những địa chỉ bán đồ ăn vặt uy tín, ngon miệng, sạch sẽ để đặt hàng. 
            </p>
            <br />
            <Link to={SHOP} className="button">
              Shop Now &nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
          <div className="banner-img"><img src={bannerImg} alt="" /></div>
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Sản phẩm đặc sắc</h1>
            <Link to={FEATURED_PRODUCTS}>Tất cả</Link>
          </div>
          {(errorFeatured && !isLoadingFeatured) ? (
            <MessageDisplay
              message={errorFeatured}
              action={fetchFeaturedProducts}
              buttonLabel="Thử lại"
            />
          ) : (
            <ProductShowcaseGrid
              products={featuredProducts}
              skeletonCount={6}
            />
          )}
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Sản phẩm Khuyến khích</h1>
            <Link to={RECOMMENDED_PRODUCTS}>Tất cả</Link>
          </div>
          {(errorRecommended && !isLoadingRecommended) ? (
            <MessageDisplay
              message={errorRecommended}
              action={fetchRecommendedProducts}
              buttonLabel="Thử lại"
            />
          ) : (
            <ProductShowcaseGrid
              products={recommendedProducts}
              skeletonCount={6}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
