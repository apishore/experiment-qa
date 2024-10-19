interface LoopStatementParams {
    start: () => any
    condition: (i: any) => boolean
    step: (i: any) => any
    body: () => void
    check: () => void
    $catch: (e: any) => void | undefined
}

function LoopStatement(p: LoopStatementParams) {
    try {
        let i = p.start()
        while (p.condition(i)) {
            p.body()
            i = p.step(i)
        }
    } catch (e) {
        if (p.$catch) p.$catch(e)
    }
}

statement LoopStatement(#start, #condition, #step)
    #check(method: string)
    #catch(e: any)
{
    try {
        for(#start; #condition; #step) {

            #() body invocation #() operator allows traling comments)

            #check("not5")
        }
    } catch(e) {
     #catch(e)
    }
}

// usage
LoopStatement(let i=0; i< 10; i++) {
    console.info(`step ${i}`)
} check(method, i) {
    if(method == "not5" && i !== 5) throw new Error('i is bad value according to method not5')
} catch(e) {
    console.error(e)
}


statement ListBuilder<T>(list: T[])
#first(item: T)
#middle(item: T)
#last(item: T)
{
    for(let i=0; i < list.length; i++) {
        #()
        if(i === 0) #first(list[i])
        else if(i === list.length - 1) #last(list[i])
        else #middle(list[i];
    } catch(e) {
        #catch(e)
    }
}

// usage
ListBuilder(["a", "b", "c"]) {
    console.info(`item ${item}`)
}
first(item) {
    console.info(`first ${item}`)
}
middle(item) {
    console.info(`middle ${item}`)
}
last(item) {
    console.info(`last ${item}`)
}
catch(e) {
    console.error(e)
}
finally {
    console.info('done')
}

// actual code (after transpiling into typescript)
try {
    for(let i=0; i < list.length; i++) {
        console.info(`item ${item}`)
        if(i === 0) console.info(`first ${list[i]}`)
        else if(i === list.length - 1) console.info(`last ${list[i]}`)
        else console.info(`middle ${list[i]}`)
    }
} catch(e) {
    console.error(e)
} finally {
    console.info('done')
}



