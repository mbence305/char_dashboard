import React from 'react';
import './StatCard.css';

const StatCard = (props)=>{
    return(
        <div className="statcard ml-4 p-1 w-full relative">
            <svg width="116.1" height="34" xmlns="http://www.w3.org/2000/svg" class="absolute left-0.5">
                <g>
                    <g stroke="null" id="SavingThrowRowBoxSvg-Page-1_1_">
                        <g stroke="null" id="SavingThrowRowBoxSvg-Sheet_Desktop_Static">
                            <path stroke="null" d="m109.56207,0l-22.56897,0l-0.30776,0.2059c-1.23103,0.8236 -2.35948,1.75015 -3.28276,2.77965l-77.55517,0l-0.30776,0.4118c-0.7181,1.2354 -3.07759,4.63274 -5.02672,5.55929l-0.51293,0.2059l0,16.57493l0.51293,0.2059c1.84655,0.92655 4.20603,4.32389 5.02672,5.55929l0.30776,0.4118l77.55517,0c1.02586,1.0295 2.15431,1.95605 3.28276,2.77965l0.30776,0.2059l22.46638,0l0.30776,-0.2059c5.74483,-3.91209 9.23276,-10.29499 9.23276,-17.29558s-3.48793,-13.38348 -9.23276,-17.29558l-0.20517,-0.10295zm7.48879,17.50148c0,5.97109 -2.975,11.53038 -7.79655,14.92773l-10.56638,0c-4.82155,-2.16195 -11.38707,-3.2944 -14.66983,-3.91209c-2.35948,-3.0885 -3.79569,-7.00059 -3.79569,-11.01563l0,0c0,-4.01504 1.33362,-7.92714 3.79569,-11.01563c3.18017,-0.6177 9.74569,-1.75015 14.66983,-3.91209l10.56638,0c4.92414,3.39735 7.79655,8.95664 7.79655,14.92773l0,0zm-45.44569,-12.76578c0.82069,0.72065 2.56466,1.8531 5.84741,2.16195c-0.92328,1.54425 -3.07759,5.66224 -3.07759,10.60384s2.05172,9.05959 3.07759,10.60384c-3.28276,0.30885 -5.02672,1.4413 -5.84741,2.16195l-56.83276,0c-3.18017,-1.13245 -11.38707,-4.63274 -13.23362,-9.57434l0,-6.38289c1.94914,-4.94159 10.15603,-8.33894 13.23362,-9.57434l56.83276,0zm6.97586,2.2649c0.61552,0 1.33362,0 2.05172,0c-1.84655,3.19145 -2.87241,6.79469 -2.87241,10.60384l0,0c0,3.80914 1.02586,7.41239 2.975,10.60384c-0.7181,0 -1.33362,-0.10295 -2.05172,0c-0.61552,-1.0295 -3.18017,-5.35339 -3.18017,-10.50089s2.46207,-9.67729 3.07759,-10.70679l0,0zm9.54052,25.42861c-1.12845,-0.8236 -2.15431,-1.75015 -3.07759,-2.6767c2.46207,0.51475 5.2319,1.33835 8.51466,2.6767l-5.43707,0l0,0zm-6.87328,-3.2944c0.30776,0.4118 0.51293,0.72065 0.82069,1.13245l-8.71983,0c1.43621,-0.72065 3.89828,-1.54425 7.89914,-1.13245l0,0zm-74.78535,1.13245c-0.7181,-1.13245 -2.87241,-4.22094 -5.02672,-5.55929l0,-1.95605c2.35948,3.5003 7.28362,6.07404 10.66897,7.51534l-5.64224,0l0,0zm-5.02672,-19.97227c2.15431,-1.33835 4.30862,-4.42684 5.02672,-5.55929l5.64224,0c-3.38534,1.4413 -8.2069,4.01504 -10.66897,7.51534l0,-1.95605l0,0zm80.63276,-5.55929c-0.30776,0.4118 -0.51293,0.72065 -0.82069,1.13245c-4.00086,0.4118 -6.46293,-0.4118 -7.89914,-1.13245l8.71983,0zm2.975,0.51475c0.92328,-1.0295 1.94914,-1.95605 3.07759,-2.6767l5.43707,0c-3.28276,1.33835 -6.15517,2.16195 -8.51466,2.6767l0,0z" id="SavingThrowRowBoxSvg-Page-1" fill="#C5313180"/>
                        </g>
                    </g>
                </g>
            </svg>
            <h4 className="ml-6 w-8 text-center">{props.StatName}</h4>
            <div className="mr-2 ml-8 w-4 text-center">
                {props.StatNum}
            </div>
            <button className="hover:bg-gray-400 rounded ml-6 border-2  w-10 border-red-900 py-1 px-3">{props.Modifier}</button>
            
        </div>
    );
};

export default StatCard;