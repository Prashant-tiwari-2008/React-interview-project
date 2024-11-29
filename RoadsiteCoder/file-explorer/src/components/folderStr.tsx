import React, { useState } from 'react'

export interface Folder {
    id: string,
    name: string,
    isFolder: boolean,
    items: Folder[];
}

interface FolderStrProps {
    data: Folder; // Expecting the "data" prop to match the Folder type
}

const FolderStr = (props: FolderStrProps) => {
    const { data } = props;
    const [isExpanded, setIsExpanded] = useState(false); // Track folder expansion state
    const [addFolder, setAddFolder] = useState(false); // Track folder expansion state
    const [addFile, setAddFile] = useState(false); // Track folder expansion state

    const handleFolderClick = () => {
        if (data.isFolder) {
            setIsExpanded(!isExpanded)
        }
    }

    const handleAddFolder = () => {
        setAddFolder(true)
    }

    const handleAddFile = () => {
        setAddFile(true)
    }


    return (
        <>
            {data.isFolder ? (
                <>
                    <div className='rootDir'>
                        <h1 onClick={handleFolderClick} >📁{data.name}</h1>
                        <div className='button'>
                            <button onClick={handleAddFolder}>📁+</button>
                            <button onClick={handleAddFile}>📃-</button>
                        </div>
                    </div>
                    {addFolder && 
                        <div className='newFolder'>
                            <h1>📁</h1>
                            <input />
                        </div>
                    }
                    {addFile && 
                        <div className='newFile'>
                            <h1>📃</h1>
                            <input />
                        </div>
                    }
                    {isExpanded &&
                        data.items.map((item) => (
                            <div style={{marginLeft : "25px"}}>
                                <FolderStr key={item.id} data={item}  />
                            </div>   
                        ))
                    }
                </>
            ) : (
                <h1>📃 {data.name}</h1>
            )
            }
        </>
    )
}



export default FolderStr