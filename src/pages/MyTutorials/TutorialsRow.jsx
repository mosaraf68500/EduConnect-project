import React from 'react';

const TutorialsRow = ({tutorial, index}) => {
    const {username, language, image} = tutorial;
    return (
        <div>
            <tr>
            <th>
                <label>
                   {index + 1}
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={image}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{username}</div>
                        <div className="text-sm opacity-50">{language}</div>
                    </div>
                </div>
            </td>
            <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>Purple</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
        </div>
    );
};

export default TutorialsRow;





