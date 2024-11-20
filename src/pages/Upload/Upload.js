import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Upload() {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get('https://tiktok-api23.p.rapidapi.com/api/user/info?uniqueId=catt47', {
                    headers: {
                        'x-rapidapi-key': 'cf5b00cc13msh6239bd846864660p19c2e7jsn3c723f6570fa',
                        'x-rapidapi-host': 'tiktok-api23.p.rapidapi.com',
                    },
                });
                setUserInfo(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchUserInfo();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    console.log(userInfo);
    return (
        // <div>
        //     <div className="content">
        //         <h2>Upload page</h2>
        //     </div>
        // </div>
        <div>
            <h1>TikTok User Info</h1>
            {userInfo && (
                <div>
                    {/* <h2>{userInfo.data.nickname}</h2>
                    <img src={userInfo.data.avatarUrl} alt="Avatar" />
                    <p>Followers: {userInfo.data.followerCount}</p> */}
                    Test
                </div>
            )}
        </div>
    );
}

export default Upload;
