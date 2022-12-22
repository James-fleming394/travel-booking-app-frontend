import useFetch from "../hooks/useFetch";

const Featured = () => {
    const { data, loading, error } = useFetch(
        "http://localhost:6001/api/hotels/countByCity?cities=Miami,London,Madrid"
    );

    return (
        <><div className="homeTitle">
            <h1>Featured Locations</h1>
        </div><div className="featured">
                {loading ? (
                    "Loading please wait"
                ) : (
                    <>

                        <div className="featuredItem">
                            <img
                                src="https://www.miamiluxuryhomes.com/wp-content/uploads/2018/03/allison-island.jpg"
                                alt=""
                                className="featuredImg" />
                            <div className="featuredTitles">
                                <h1>Miami</h1>
                                <h2>{data[0]} properties</h2>
                            </div>
                        </div>
                        <div className="featuredItem">
                            <img
                                src="http://london.com/wp-content/uploads/2019/03/london_001.jpg"
                                alt=""
                                className="featuredImg" />
                            <div className="featuredTitles">
                                <h1>London</h1>
                                <h2>{data[1]} properties</h2>
                            </div>
                        </div>
                        <div className="featuredItem">
                            <img
                                src="https://www.nato.int/nato_static_fl2014/assets/pictures/images_mfu/2022/6/stock/220628-madrid_rdax_775x440s.jpg"
                                alt=""
                                className="featuredImg" />
                            <div className="featuredTitles">
                                <h1>Madrid</h1>
                                <h2>{data[2]} properties</h2>
                            </div>
                        </div>
                    </>
                )}
            </div></>
    );
}

export default Featured;