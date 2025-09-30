"use client"
import React,{FC,useState} from "react"
import Heading from "./utils/Heading";


interface Props{

}

const Page:FC<Props> = (props)=>{
  return (
    <div>
      <Heading
      title="LearnSphere"
      description="LearnSphere is a platform for students to learn and get help from teachers"
      keywords="ELearning,Programming,MERN,Javascript"
      />
    </div>
  );
}
export default Page;