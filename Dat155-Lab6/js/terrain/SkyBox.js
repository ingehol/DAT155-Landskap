import {Object3D, TextureLoader, MeshBasicMaterial, BackSide, BoxGeometry, Mesh} from "../lib/three.module.js";

export default class SkyBox extends Object3D {

    constructor() {
        super();

        let loader = new TextureLoader();

        let skyGeometry = new BoxGeometry( 520, 520, 520);


        let texture_bk = loader.load('resources/skydome/graycloud_bk.jpg');
        let texture_dn = loader.load('resources/skydome/graycloud_dn.jpg');
        let texture_ft = loader.load('resources/skydome/graycloud_ft.jpg');
        let texture_lf = loader.load('resources/skydome/graycloud_lf.jpg');
        let texture_rt = loader.load('resources/skydome/graycloud_rt.jpg');
        let texture_up = loader.load('resources/skydome/graycloud_up.jpg');

        /*
        let texture_bk = loader.load('resources/skydome/humble_bk.jpg');
        let texture_dn = loader.load('resources/skydome/humble_dn.jpg');
        let texture_ft = loader.load('resources/skydome/humble_ft.jpg');
        let texture_lf = loader.load('resources/skydome/humble_lf.jpg');
        let texture_rt = loader.load('resources/skydome/humble_rt.jpg');
        let texture_up = loader.load('resources/skydome/humble_up.jpg');
        */

        let mat_bk = new MeshBasicMaterial( {
            map: texture_bk,
            side: BackSide
        });
        let mat_dn = new MeshBasicMaterial( {
            map: texture_dn,
            side: BackSide
        });
        let mat_ft = new MeshBasicMaterial( {
            map: texture_ft,
            side: BackSide
        });
        let mat_lf = new MeshBasicMaterial( {
            map: texture_lf,
            side: BackSide
        });
        let mat_rt = new MeshBasicMaterial( {
            map: texture_rt,
            side: BackSide
        });
        let mat_up = new MeshBasicMaterial( {
            map: texture_up,
            side: BackSide
        });

        let materialArray = [];
        materialArray.push(mat_ft);
        materialArray.push(mat_bk);
        materialArray.push(mat_up);
        materialArray.push(mat_dn);
        materialArray.push(mat_rt);
        materialArray.push(mat_lf);


        let skybox = new Mesh( skyGeometry, materialArray );
        this.add( skybox );
    }
}