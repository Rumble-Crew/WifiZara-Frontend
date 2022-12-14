import React from "react";
import Color from "../palette/color";
import * as Yup from "yup"
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../../../utils/context/etudiant.reducer";



export default function CardAdd() {
    const dispatch = useDispatch()
    const {token} = useSelector(state=>state.authentification)
    const validationSchema = Yup.object().shape({
      lastName: Yup.string("Votre nom ne doit contenir que des lettres")
        .required('Votre nom est obligatoire'),
      firstName: Yup.string("Votre prenom ne doit contenir que des lettres")
        .required('Votre prenom est obligatoire'),
      matriculate: Yup.number("Votre matricule doit contenir seulement des chiffres")
        .required('Votre matricule est osssbligatoire'),
      email: Yup.string().email("Veuillez entrer une adresse email valide")
        .required("Votre adresse e-mail est obligatoire"),
      password: Yup.string().required('Mot de passe correct obligatoire'),
      phone: Yup.number("Votre numéro de téléphone doit contenir seulement des chiffres")
      .required('Votre numéro de téléphone est osssbligatoire'),
      role:Yup.string("Votre role ne doit contenir que des lettres")
      .required('Votre role est obligatoire'),
      levelWording:Yup.string("Votre niveau ne doit contenir que des lettres")
      .required('Votre niveau est obligatoire'),
    });
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm({
      resolver: yupResolver(validationSchema)
    });

    const submitValues = () =>{
      console.log("Clock...")
    }

    const HandleAddEtudiant = async(data) =>{
      const formData = new FormData()
      formData.append("firstName",data.firstName)
      formData.append("lastName",data.lastName)
      formData.append("email",data.email)
      formData.append("levelWording",data.levelWording)
      formData.append("matriculate",data.matriculate)
      formData.append("password",data.password)
      formData.append("phone",data.phone)
      formData.append("role",data.role)
      formData.append("image","/crew.png")
      dispatch(addStudent(formData,token))
    }


  return (
    <>
      <div className="container mx-auto px-4 h-full text-white">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4" style={{backgroundColor:'#111827'}}>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Ajouter un étudiant
                  </h6>
                </div>
                <div className="btn-wrapper text-center">

                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                </div>
                <form onSubmit={handleSubmit(HandleAddEtudiant)}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      name='lastName'
                      {...register('lastName')}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                      placeholder="Nom"
                    />
                    <p className="text-red-500 italic">{errors.lastName?.message}</p>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Prenom
                    </label>
                    <input
                      type="text"
                      name='firstName'
                      {...register('firstName')}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                      placeholder="Prénom(s)"
                    />
                    <p className="text-red-500 italic">{errors.firstName?.message}</p>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Matricule
                    </label>
                    <input
                      type="number"
                      name='matriculate'
                      {...register('matriculate')}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                      placeholder="Matricule"
                    />
                    <p className="text-red-500 italic">{errors.matriculate?.message}</p>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Niveau
                    </label>
                    <select  {...register('levelWording')} name="levelWording" className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black">
                      <option value="L1">L1</option>
                      <option value="L2">L2</option>
                      <option value="L3">L3</option>
                      <option value="M1">M1</option>
                      <option value="M2">M2</option>
                    </select>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Rôle
                    </label>
                    <select name="role"  {...register('role')} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black">
                      <option value="2">Etudiant</option>
                      <option value="1">Admin</option>
                    </select>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      name='email'
                      {...register('email')}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                      placeholder="Email"
                    />
                    <p className="text-red-500 italic">{errors.email?.message}</p>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Mot de passe
                    </label>
                    <input
                      type="text"
                      name='password'
                      {...register('password')}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                      placeholder="Mot de passe"
                    />
                    <p className="text-red-500 italic">{errors.password?.message}</p>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Teléphone
                    </label>
                    <input
                      type="number"
                      name='phone'
                      {...register('phone')}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                      placeholder="Numéro de téléphone"
                    />
                    <p className="text-red-500 italic">{errors.phone?.message}</p>
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        J'accepte {" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <input
                      className="text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      style={{backgroundColor:Color.paletteTeal1}}
                      value='Ajouter'
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}