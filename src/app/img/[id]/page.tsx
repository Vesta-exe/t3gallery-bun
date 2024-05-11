import FullPageImageView from "~/common/full-image-page";

export default function PhotoPage({
    params: {id: photoId},
} : {
    params: {id: string};
}) {

    return ( 
        <div className="flex h-full w-full min-w-0 overflow-y-hidden">
            <FullPageImageView photoId={photoId}/>
        </div>
    );
}