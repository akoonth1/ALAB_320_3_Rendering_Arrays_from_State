import { LearnerArray } from "../utilities/data.mjs"
import React from 'react'
import "./LearnerCard.css"
import InLearner from "./InLearner"
import { useState } from 'react'


export default function LearnerCard() {

    const [learner, setLearner] = useState({learners: LearnerArray})


    return (<>
        <div>
            <h1> Learner Card</h1>
            <div className="Card">
            {learner.learners.map((learner, index) => (
            <InLearner key={index} learner={learner} />
          ))}
             
            </div>
        </div>
        </>)}