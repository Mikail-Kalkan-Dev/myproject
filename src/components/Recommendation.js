function Recommendation() {
    const curentMonth = new Date().getMonth()
    const isSpring = curentMonth>=2 && curentMonth <=5
    if (isSpring) {
        return <div>
            <h2>Ce le Printemps, Planter , Rempotez !!!</h2>
            
        </div>
    }
    return <div>
        <h2>Ce n'est pas le moment de rempoter</h2>
    </div>
    

}

export default Recommendation