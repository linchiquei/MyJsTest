const hero = {
    name: 'abc',
    saaymyname: function() {
        console.log(this.name)

        // setTimeout(
        //     function() {
        //         console.log(this.name)
        //     }.bind(this), 1000
        // )
        setTimeout(
            function(e) {
                console.log(e.name)
            }, 1000, this)
    }
}

hero.saaymyname()