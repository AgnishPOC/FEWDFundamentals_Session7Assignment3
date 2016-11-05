    function counter()
        {
            var count=0;
            var incrementCounter=function () {
                count++;

    console.log(count);

            };
        return incrementCounter;

        }

        var callIncrementCounter=counter();
        callIncrementCounter();
        callIncrementCounter();
        callIncrementCounter();
        callIncrementCounter();
        callIncrementCounter();
        callIncrementCounter();