import{_ as l,o as c,c as u,a as s,i as m,h as i,v as d}from"./index-36296579.js";const{VITE_API:p}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"mandyapi",BASE_URL:"/vue-6mainWork/",MODE:"production",DEV:!1,PROD:!0},_={data(){return{user:{username:"",password:""}}},methods:{login(){this.$http.post(`${p}/admin/signin`,this.user).then(t=>{const{token:e,expired:n}=t.data;document.cookie=`userToken=${e}; expires=${new Date(n)};`,this.$router.push("/admin/products")}).catch(t=>{alert(t.data.message)})}}},h={class:"container"},f={class:"row justify-content-center"},w=s("h1",{class:"h3 mb-3 font-weight-normal"}," 請先登入 ",-1),v={class:"col-8"},g={class:"form-floating mb-3"},b=s("label",{for:"username"},"Email address",-1),x={class:"form-floating"},E=s("label",{for:"password"},"Password",-1),P=s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1);function V(t,e,n,k,r,a){return c(),u("div",h,[s("div",f,[w,s("div",v,[s("form",{id:"form",class:"form-signin",onSubmit:e[2]||(e[2]=m((...o)=>a.login&&a.login(...o),["prevent"]))},[s("div",g,[i(s("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=o=>r.user.username=o)},null,512),[[d,r.user.username]]),b]),s("div",x,[i(s("input",{type:"password",class:"form-control",id:"password",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=o=>r.user.password=o)},null,512),[[d,r.user.password]]),E]),P],32)])])])}const A=l(_,[["render",V]]);export{A as default};
