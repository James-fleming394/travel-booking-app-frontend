import useFetch from "../hooks/useFetch";

const Featured = () => {
    const { data, loading, error } = useFetch(
        "http://localhost:6001/api/hotels/countByCity?cities=Miami,London,Madrid"
    );

    return (
        <div className="featured">
            {loading ? (
            "Loading please wait"
            ) : (
            <>
            <div className="featuredItem">
                <img
                    src="https://a.cdn-hotels.com/gdcs/production48/d1488/5d46fe1d-5102-4ef3-8226-c8d864e05060.jpg"
                    alt=""
                    className="featuredImg"
                />
            <div className="featuredTitles">
                <h1>Miami</h1>
                <h2>{data[0]} properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://www.kaplaninternational.com/files/styles/hero_banner_md/public/school/gallery/kaplan-english-school-in-London-4.jpg?itok=RhkxxF50"
                    alt=""
                    className="featuredImg"
                />
            <div className="featuredTitles">
                <h1>London</h1>
                <h2>{data[1]} properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://www.nato.int/nato_static_fl2014/assets/pictures/images_mfu/2022/6/stock/220628-madrid_rdax_775x440s.jpg"
                    alt=""
                    className="featuredImg"
                />
            <div className="featuredTitles">
                    <h1>Madrid</h1>
                    <h2>{data[2]} properties</h2>
                </div>
            </div>
            </>
        )}
        </div>
    );
}

export default Featured;