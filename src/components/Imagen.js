



const Imagen = ({imagen}) => {

    // aplicando el destructuring para llamar a las imágenes
    const { largeImageURL, tags, previewURL, likes, views } = imagen;

    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"> 
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top" />

                <div className="card-body">
                    <p className="card-text">{likes} Me gusta</p>
                    <p className="card-text">{views} Vistas</p>
                </div>

                <div className="card-footer">
                    <a
                        href={largeImageURL}
                        target="_blank"
                        rel="nooponer noreferrer"
                        className="btn-block btn-primary btn"    
                    >
                        Ver Imagen
                    </a>
                </div>
            </div>

            
        </div>
    );
}
 
export default Imagen;