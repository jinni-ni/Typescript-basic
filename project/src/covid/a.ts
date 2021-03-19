interface Hero {
    name: string;
    skill: string;
}

// const capt: Hero = {
//     name: 'capt',
//     skill: 'shield',
// };

// const capt: Hero = {};

// 오류가 나지 않음
// 초기값을 정하지 않았기 때문에 누락될 여지가 있음
// const capt = {} as Hero;
// capt.name = 'cpat';
// capt.skill = 'shield'

const a: string | null;
// if (a) {

// }

a!;
