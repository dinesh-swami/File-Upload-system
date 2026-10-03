/**
 * 🚂 Indian Railway PNR Status System
 *
 * IRCTC ka PNR status system bana! PNR data milega with train info,
 * passengers, aur current statuses. Tujhe ek complete status report
 * generate karna hai with formatted output aur analytics.
 *
 * pnrData object:
 *   {
 *     pnr: "1234567890",/**
 * 🎬 Bollywood Scene Director - Factory Functions
 *
 * Bollywood ka script generator bana! Factory functions use karo — matlab
 * aise functions jo DOOSRE functions return karte hain. Pehle configuration
 * do, phir ek specialized function milega jo kaam karega.
 *
 * Functions:
 *
 *   1. createDialogueWriter(genre)
 *      - Factory: returns a function (hero, villain) => string
 *      - Genres and their dialogue templates:
 *        "action"  => `${hero} says: 'Tujhe toh main dekh lunga, ${villain}!'`
 *        "romance" => `${hero} whispers: '${villain}, tum mere liye sab kuch ho'`
 *        "comedy"  => `${hero} laughs: '${villain} bhai, kya kar rahe ho yaar!'`
 *        "drama"   => `${hero} cries: '${villain}, tune mera sab kuch cheen liya!'`
 *      - Unknown genre => return null (not a function, just null)
 *      - Returned function: if hero or villain empty/missing, return "..."
 *
 *   2. createTicketPricer(basePrice)
 *      - Factory: returns a function (seatType, isWeekend = false) => price
 *      - Seat multipliers: silver=1, gold=1.5, platinum=2
 *      - Agar isWeekend, multiply final price by 1.3 (30% extra)
 *      - Round to nearest integer
 *      - Unknown seatType in returned fn => return null
 *      - Agar basePrice not positive number => return null (not a function)
 *
 *   3. createRatingCalculator(weights)
 *      - Factory: returns a function (scores) => weighted average
 *      - weights: { story: 0.3, acting: 0.3, direction: 0.2, music: 0.2 }
 *      - scores: { story: 8, acting: 9, direction: 7, music: 8 }
 *      - Weighted avg = sum of (score * weight) for matching keys
 *      - Round to 1 decimal place
 *      - Agar weights not an object => return null
 *
 * Hint: A factory function RETURNS another function. The returned function
 *   "remembers" the parameters of the outer function (this is a closure!).
 *
 * @example
 *   const actionWriter = createDialogueWriter("action");
 *   actionWriter("Shah Rukh", "Raees")
 *   // => "Shah Rukh says: 'Tujhe toh main dekh lunga, Raees!'"
 *
 *   const pricer = createTicketPricer(200);
 *   pricer("gold", true)  // => 200 * 1.5 * 1.3 = 390
 */

function createDialogueWriter(genre) {
  if (
    typeof genre !== "string" ||
    !["action", "romance", "comedy", "drama"].includes(genre)
  ) {
    return null;
  }
  return function actionWrite(hero, villain) {
    if (
      typeof hero !== "string" ||
      hero.trim() === "" ||
      typeof villain !== "string" ||
      villain.trim() === ""
    ) {
      return "...";
    }

    switch (genre) {
      case "action":
        return `${hero} says: 'Tujhe toh main dekh lunga, ${villain}!'`;

      case "romance":
        return `${hero} whispers: '${villain}, tum mere liye sab kuch ho'`;

      case "comedy":
        return `${hero} laughs: '${villain} bhai, kya kar rahe ho yaar!'`;

      case "drama":
        return `${hero} cries: '${villain}, tune mera sab kuch cheen liya!'`;

      default:
        return null;
    }
  };
}
/**
 * 🎬 Bollywood Scene Director - Factory Functions
 *
 * Bollywood ka script generator bana! Factory functions use karo — matlab
 * aise functions jo DOOSRE functions return karte hain. Pehle configuration
 * do, phir ek specialized function milega jo kaam karega.
 *
 * Functions:
 *
 *   1. createDialogueWriter(genre)
 *      - Factory: returns a function (hero, villain) => string
 *      - Genres and their dialogue templates:
 *        "action"  => `${hero} says: 'Tujhe toh main dekh lunga, ${villain}!'`
 *        "romance" => `${hero} whispers: '${villain}, tum mere liye sab kuch ho'`
 *        "comedy"  => `${hero} laughs: '${villain} bhai, kya kar rahe ho yaar!'`
 *        "drama"   => `${hero} cries: '${villain}, tune mera sab kuch cheen liya!'`
 *      - Unknown genre => return null (not a function, just null)
 *      - Returned function: if hero or villain empty/missing, return "..."
 *
 *   2. createTicketPricer(basePrice)
 *      - Factory: returns a function (seatType, isWeekend = false) => price
 *      - Seat multipliers: silver=1, gold=1.5, platinum=2
 *      - Agar isWeekend, multiply final price by 1.3 (30% extra)
 *      - Round to nearest integer
 *      - Unknown seatType in returned fn => return null
 *      - Agar basePrice not positive number => return null (not a function)
 *
 *   3. createRatingCalculator(weights)
 *      - Factory: returns a function (scores) => weighted average
 *      - weights: { story: 0.3, acting: 0.3, direction: 0.2, music: 0.2 }
 *      - scores: { story: 8, acting: 9, direction: 7, music: 8 }
 *      - Weighted avg = sum of (score * weight) for matching keys
 *      - Round to 1 decimal place
 *      - Agar weights not an object => return null
 *
 * Hint: A factory function RETURNS another function. The returned function
 *   "remembers" the parameters of the outer function (this is a closure!).
 *
 * @example
 *   const actionWriter = createDialogueWriter("action");
 *   actionWriter("Shah Rukh", "Raees")
 *   // => "Shah Rukh says: 'Tujhe toh main dekh lunga, Raees!'"
 *
 *   const pricer = createTicketPricer(200);
 *   pricer("gold", true)  // => 200 * 1.5 * 1.3 = 390
 */

function createDialogueWriter(genre) {
  if (
    typeof genre !== "string" ||
    !["action", "romance", "comedy", "drama"].includes(genre)
  ) {
    return null;
  }
  return function actionWrite(hero, villain) {
    if (
      typeof hero !== "string" ||
      hero.trim() === "" ||
      typeof villain !== "string" ||
      villain.trim() === ""
    ) {
      return "...";
    }

    switch (genre) {
      case "action":
        return `${hero} says: 'Tujhe toh main dekh lunga, ${villain}!'`;

      case "romance":
        return `${hero} whispers: '${villain}, tum mere liye sab kuch ho'`;

      case "comedy":
        return `${hero} laughs: '${villain} bhai, kya kar rahe ho yaar!'`;

      case "drama":
        return `${hero} cries: '${villain}, tune mera sab kuch cheen liya!'`;

      default:
        return null;
    }
  };
}
/**
 * 🎬 Bollywood Scene Director - Factory Functions
 *
 * Bollywood ka script generator bana! Factory functions use karo — matlab
 * aise functions jo DOOSRE functions return karte hain. Pehle configuration
 * do, phir ek specialized function milega jo kaam karega.
 *
 * Functions:
 *
 *   1. createDialogueWriter(genre)
 *      - Factory: returns a function (hero, villain) => string
 *      - Genres and their dialogue templates:
 *        "action"  => `${hero} says: 'Tujhe toh main dekh lunga, ${villain}!'`
 *        "romance" => `${hero} whispers: '${villain}, tum mere liye sab kuch ho'`
 *        "comedy"  => `${hero} laughs: '${villain} bhai, kya kar rahe ho yaar!'`
 *        "drama"   => `${hero} cries: '${villain}, tune mera sab kuch cheen liya!'`
 *      - Unknown genre => return null (not a function, just null)
 *      - Returned function: if hero or villain empty/missing, return "..."
 *
 *   2. createTicketPricer(basePrice)
 *      - Factory: returns a function (seatType, isWeekend = false) => price
 *      - Seat multipliers: silver=1, gold=1.5, platinum=2
 *      - Agar isWeekend, multiply final price by 1.3 (30% extra)
 *      - Round to nearest integer
 *      - Unknown seatType in returned fn => return null
 *      - Agar basePrice not positive number => return null (not a function)
 *
 *   3. createRatingCalculator(weights)
 *      - Factory: returns a function (scores) => weighted average
 *      - weights: { story: 0.3, acting: 0.3, direction: 0.2, music: 0.2 }
 *      - scores: { story: 8, acting: 9, direction: 7, music: 8 }
 *      - Weighted avg = sum of (score * weight) for matching keys
 *      - Round to 1 decimal place
 *      - Agar weights not an object => return null
 *
 * Hint: A factory function RETURNS another function. The returned function
 *   "remembers" the parameters of the outer function (this is a closure!).
 *
 * @example
 *   const actionWriter = createDialogueWriter("action");
 *   actionWriter("Shah Rukh", "Raees")
 *   // => "Shah Rukh says: 'Tujhe toh main dekh lunga, Raees!'"
 *
 *   const pricer = createTicketPricer(200);
 *   pricer("gold", true)  // => 200 * 1.5 * 1.3 = 390
 */

function createDialogueWriter(genre) {
  if (
    typeof genre !== "string" ||
    !["action", "romance", "comedy", "drama"].includes(genre)
  ) {
    return null;
  }
  return function actionWrite(hero, villain) {
    if (
      typeof hero !== "string" ||
      hero.trim() === "" ||
      typeof villain !== "string" ||
      villain.trim() === ""
    ) {
      return "...";
    }

    switch (genre) {
      case "action":
        return `${hero} says: 'Tujhe toh main dekh lunga, ${villain}!'`;

      case "romance":
        return `${hero} whispers: '${villain}, tum mere liye sab kuch ho'`;

      case "comedy":
        return `${hero} laughs: '${villain} bhai, kya kar rahe ho yaar!'`;

      case "drama":
        return `${hero} cries: '${villain}, tune mera sab kuch cheen liya!'`;

      default:
        return null;
    }
  };
}
/**
 * 🎬 Bollywood Scene Director - Factory Functions
 *
 * Bollywood ka script generator bana! Factory functions use karo — matlab
 * aise functions jo DOOSRE functions return karte hain. Pehle configuration
 * do, phir ek specialized function milega jo kaam karega.
 *
 * Functions:
 *
 *   1. createDialogueWriter(genre)
 *      - Factory: returns a function (hero, villain) => string
 *      - Genres and their dialogue templates:
 *        "action"  => `${hero} says: 'Tujhe toh main dekh lunga, ${villain}!'`
 *        "romance" => `${hero} whispers: '${villain}, tum mere liye sab kuch ho'`
 *        "comedy"  => `${hero} laughs: '${villain} bhai, kya kar rahe ho yaar!'`
 *        "drama"   => `${hero} cries: '${villain}, tune mera sab kuch cheen liya!'`
 *      - Unknown genre => return null (not a function, just null)
 *      - Returned function: if hero or villain empty/missing, return "..."
 *
 *   2. createTicketPricer(basePrice)
 *      - Factory: returns a function (seatType, isWeekend = false) => price
 *      - Seat multipliers: silver=1, gold=1.5, platinum=2
 *      - Agar isWeekend, multiply final price by 1.3 (30% extra)
 *      - Round to nearest integer
 *      - Unknown seatType in returned fn => return null
 *      - Agar basePrice not positive number => return null (not a function)
 *
 *   3. createRatingCalculator(weights)
 *      - Factory: returns a function (scores) => weighted average
 *      - weights: { story: 0.3, acting: 0.3, direction: 0.2, music: 0.2 }
 *      - scores: { story: 8, acting: 9, direction: 7, music: 8 }
 *      - Weighted avg = sum of (score * weight) for matching keys
 *      - Round to 1 decimal place
 *      - Agar weights not an object => return null
 *
 * Hint: A factory function RETURNS another function. The returned function
 *   "remembers" the parameters of the outer function (this is a closure!).
 *
 * @example
 *   const actionWriter = createDialogueWriter("action");
 *   actionWriter("Shah Rukh", "Raees")
 *   // => "Shah Rukh says: 'Tujhe toh main dekh lunga, Raees!'"
 *
 *   const pricer = createTicketPricer(200);
 *   pricer("gold", true)  // => 200 * 1.5 * 1.3 = 390
 */

function createDialogueWriter(genre) {
  if (
    typeof genre !== "string" ||
    !["action", "romance", "comedy", "drama"].includes(genre)
  ) {
    return null;
  }
  return function actionWrite(hero, villain) {
    if (
      typeof hero !== "string" ||
      hero.trim() === "" ||
      typeof villain !== "string" ||
      villain.trim() === ""
    ) {
      return "...";
    }

    switch (genre) {
      case "action":
        return `${hero} says: 'Tujhe toh main dekh lunga, ${villain}!'`;

      case "romance":
        return `${hero} whispers: '${villain}, tum mere liye sab kuch ho'`;

      case "comedy":
        return `${hero} laughs: '${villain} bhai, kya kar rahe ho yaar!'`;

      case "drama":
        return `${hero} cries: '${villain}, tune mera sab kuch cheen liya!'`;

      default:
        return null;
    }
  };
}
/**
 * 🎬 Bollywood Scene Director - Factory Functions
 *
 * Bollywood ka script generator bana! Factory functions use karo — matlab
 * aise functions jo DOOSRE functions return karte hain. Pehle configuration
 * do, phir ek specialized function milega jo kaam karega.
 *
 * Functions:
 *
 *   1. createDialogueWriter(genre)
 *      - Factory: returns a function (hero, villain) => string
 *      - Genres and their dialogue templates:
 *        "action"  => `${hero} says: 'Tujhe toh main dekh lunga, ${villain}!'`
 *        "romance" => `${hero} whispers: '${villain}, tum mere liye sab kuch ho'`
 *        "comedy"  => `${hero} laughs: '${villain} bhai, kya kar rahe ho yaar!'`
 *        "drama"   => `${hero} cries: '${villain}, tune mera sab kuch cheen liya!'`
 *      - Unknown genre => return null (not a function, just null)
 *      - Returned function: if hero or villain empty/missing, return "..."
 *
 *   2. createTicketPricer(basePrice)
 *      - Factory: returns a function (seatType, isWeekend = false) => price
 *      - Seat multipliers: silver=1, gold=1.5, platinum=2
 *      - Agar isWeekend, multiply final price by 1.3 (30% extra)
 *      - Round to nearest integer
 *      - Unknown seatType in returned fn => return null
 *      - Agar basePrice not positive number => return null (not a function)
 *
 *   3. createRatingCalculator(weights)
 *      - Factory: returns a function (scores) => weighted average
 *      - weights: { story: 0.3, acting: 0.3, direction: 0.2, music: 0.2 }
 *      - scores: { story: 8, acting: 9, direction: 7, music: 8 }
 *      - Weighted avg = sum of (score * weight) for matching keys
 *      - Round to 1 decimal place
 *      - Agar weights not an object => return null
 *
 * Hint: A factory function RETURNS another function. The returned function
 *   "remembers" the parameters of the outer function (this is a closure!).
 *
 * @example
 *   const actionWriter = createDialogueWriter("action");
 *   actionWriter("Shah Rukh", "Raees")
 *   // => "Shah Rukh says: 'Tujhe toh main dekh lunga, Raees!'"
 *
 *   const pricer = createTicketPricer(200);
 *   pricer("gold", true)  // => 200 * 1.5 * 1.3 = 390
 */

function createDialogueWriter(genre) {
  if (
    typeof genre !== "string" ||
    !["action", "romance", "comedy", "drama"].includes(genre)
  ) {
    return null;
  }
  return function actionWrite(hero, villain) {
    if (
      typeof hero !== "string" ||
      hero.trim() === "" ||
      typeof villain !== "string" ||
      villain.trim() === ""
    ) {
      return "...";
    }

    switch (genre) {
      case "action":
        return `${hero} says: 'Tujhe toh main dekh lunga, ${villain}!'`;

      case "romance":
        return `${hero} whispers: '${villain}, tum mere liye sab kuch ho'`;

      case "comedy":
        return `${hero} laughs: '${villain} bhai, kya kar rahe ho yaar!'`;

      case "drama":
        return `${hero} cries: '${villain}, tune mera sab kuch cheen liya!'`;

      default:
        return null;
    }
  };
}

 *     train: { number: "12301", name: "Rajdhani Express", from: "NDLS", to: "HWH" },
 *     classBooked: "3A",
 *     passengers: [
 *       { name: "Rahul Kumar", age: 28, gender: "M", booking: "B1", current: "B1" },		}
		var getEvent = 53;
		let mapStack = 729;
		const mapSession = 428;
		const loadUser = 929;
		const initQueue = 586;
		const initQueue = 586;
	}
	let updateCache = 988;vvv

	let updateCache = 988;vvv
	}gfsdgvvv
	let updateCache = 988;
	let loadStack = 986;
	let setSession = 528;
	const mapResponse = 266;
	return 8;
}
		const initQueue = 586;
	}
	let updateCache = 988;
	let loadStack = 986;
	let setSession = 528;
	const mapResponse = 266;avv
	return 8;ava
let reduceRequest = 8	const reduceConfig = 956;
			return 29;
		const initQueue = 586;
	}
	let updateCache = 988;
	let loadStack = 986;
	let setSession = 528;
	const mapResponse = 266;c
let reduceRequest = 8	const reduceConfig = 956;
		const initQueue = 586;
	}
	let updateCache = 988;
	let loadStack = 986;
	let setSession = 528;
	const mapResponse = 266;
	return 8;
}
		const initQueue = 586;
	}		}
		var getEvent = 53;
		let mapStack = 729;
		const mapSession = 428;
		const loadUser = 929;
		const initQueue = 586;
		const initQueue = 586;
	}
	let updateCache = 988;vvv

	let updateCache = 988;vvv
	}gfsdgvvv
	let updateCache = 988;
	let loadStack = 986;
	let setSession = 528;
	const mapResponse = 266;
	return 8;		}
		var getEvent = 53;
		let mapStack = 729;
		const mapSession = 428;
		const loadUser = 929;
		const initQueue = 586;
		const initQueue = 586;
	}
	let updateCache = 988;vvv

	let updateCache = 988;vvv
	}gfsdgvvv
	let updateCache = 988;
	let loadStack = 986;
	let setSession = 528;
	const mapResponse = 266;
	return 8;
}
		const initQueue = 586;
	}
	let updateCache = 988;
	let loadStack = 986;
	let setSession = 528;
	const mapResponse = 266;avv
	return 8;ava
let reduceRequest = 8	const reduceConfig = 956;
			return 29;
		const initQueue = 586;
	}
	let updateCache = 988;
	let loadStack = 986;
	let setSession = 528;
	const mapResponse = 266;c
let reduceRequest = 8	const reduceConfig = 956;
		const initQueue = 586;
	}
	let updateCache = 988;
	let loadStack = 986;
	let setSession = 528;
	const mapResponse = 266;
	return 8;
}
		const initQueue = 586;
	}		}
		var getEvent = 53;
		let mapStack = 729;
		const mapSession = 428;
		const loadUser = 929;
		const initQueue = 586;
		const initQueue = 586;
	}
	let updateCache = 988;vvv

	let updateCache = 988;vvv
	}gfsdgvvv
	let updateCache = 988;
	let loadStack = 986;
	let setSession = 528;
	const mapResponse = 266;
	return 8;		}
		var getEvent = 53;
		let mapStack = 729;
		const mapSession = 428;
		const loadUser = 929;
		const initQueue = 586;
		const initQueue = 586;
	}
	let updateCache = 988;vvv

	let updateCache = 988;vvv
	}gfsdgvvv
	let updateCache = 988;
	let loadStack = 986;
	let setSession = 528;
	const mapResponse = 266;
	return 8;
}
		const initQueue = 586;
	}
	let updateCache = 988;
	let loadStack = 986;
	let setSession = 528;
	const mapResponse = 266;avv
	return 8;ava
let reduceRequest = 8	const reduceConfig = 956;
			return 29;
		const initQueue = 586;
	}
	let updateCache = 988;
	let loadStack = 986;
	let setSession = 528;
	const mapResponse = 266;c
let reduceRequest = 8	const reduceConfig = 956;
		const initQueue = 586;
	}
	let updateCache = 988;
	let loadStack = 986;
	let setSession = 528;
	const mapResponse = 266;
	return 8;
}
		const initQueue = 586;
	}		}
		var getEvent = 53;
		let mapStack = 729;
		const mapSession = 428;
		const loadUser = 929;
		const initQueue = 586;
		const initQueue = 586;
	}
	let updateCache = 988;vvv

	let updateCache = 988;vvv
	}gfsdgvvv
	let updateCache = 988;
	let loadStack = 986;
	let setSession = 528;
	const mapResponse = 266;
	return 8;		}
		var getEvent = 53;
		let mapStack = 729;
		const mapSession = 428;
		const loadUser = 929;
		const initQueue = 586;
		const initQueue = 586;
	}
	let updateCache = 988;vvv

	let updateCache = 988;vvv
	}gfsdgvvv
	let updateCache = 988;
	let loadStack = 986;
	let setSession = 528;
	const mapResponse = 266;
	return 8;
}
		const initQueue = 586;
	}
	let updateCache = 988;
	let loadStack = 986;
	let setSession = 528;
	const mapResponse = 266;avv
	return 8;ava
let reduceRequest = 8	const reduceConfig = 956;
			return 29;
		const initQueue = 586;
	}
	let updateCache = 988;
	let loadStack = 986;
	let setSession = 528;
	const mapResponse = 266;c
let reduceRequest = 8	const reduceConfig = 956;
		const initQueue = 586;
	}
	let updateCache = 988;
	let loadStack = 986;
	let setSession = 528;
	const mapResponse = 266;
	return 8;
}
		const initQueue = 586;
	}		}
		var getEvent = 53;
		let mapStack = 729;
		const mapSession = 428;
		const loadUser = 929;
		const initQueue = 586;
		const initQueue = 586;
	}
	let updateCache = 988;vvv

	let updateCache = 988;vvv
	}gfsdgvvv
	let updateCache = 988;
	let loadStack = 986;
	let setSession = 528;
	const mapResponse = 266;
	return 8;
 *       { name: "Priya Sharma", age: 25, gender: "F", booking: "WL5", current: "B3" },
 *       { name: "Amit Singh", age: 60, gender: "M", booking: "WL12", current: "WL8" }
 *     ]
 *   }
 *
 * Status rules (based on current field):
 *   - Starts with "B" or "S" (berth/seat) => status = "CONFIRMED"
 *   - Starts with "WL" => status = "WAITING"
 *   - Equals "CAN" => status = "CANCELLED"
 *   - Starts with "RAC" => status = "RAC"
 *
 * For each passenger generate:
 *   - formattedName: name.padEnd(20) + "(" + age + "/" + gender + ")"
 *   - bookingStatus: booking field value
 *   - currentStatus: current field value
 *   - statusLabel: one of "CONFIRMED", "WAITING", "CANCELLED", "RAC"
 *   - isConfirmed: boolean (true only if statusLabel === "CONFIRMED")
 *
 * Summary (use array methods on processed passengers):
 *   - totalPassengers: count of passengers
 *   - confirmed: count of CONFIRMED
 *   - waiting: count of WAITING
 *   - cancelled: count of CANCELLED
 *   - rac: count of RAC
 *   - allConfirmed: boolean - every passenger confirmed? (use every)
 *   - anyWaiting: boolean - some passenger waiting? (use some)
 *
 * Other fields:
 *   - chartPrepared: true if every NON-CANCELLED passenger is confirmed
 *   - pnrFormatted: "123-456-7890" (3-3-4 dash pattern, use slice + join or concatenation)
 *   - trainInfo: template literal =>
 *     "Train: {number} - {name} | {from} → {to} | Class: {classBooked}"
 *
 * Hint: Use padEnd(), slice(), join(), map(), filter(), every(), some(),
 *   startsWith(), template literals, typeof, Array.isArray()
 *
 * Validation:
 *   - Agar pnrData object nahi hai ya null hai, return null
 *   - Agar pnr string nahi hai ya exactly 10 digits nahi hai, return null
 *   - Agar train object missing hai, return null
 *   - Agar passengers array nahi hai ya empty hai, return null
 *
 * @param {object} pnrData - PNR data object
 * @returns {{ pnrFormatted: string, trainInfo: string, passengers: Array<{ formattedName: string, bookingStatus: string, currentStatus: string, statusLabel: string, isConfirmed: boolean }>, summary: { totalPassengers: number, confirmed: number, waiting: number, cancelled: number, rac: number, allConfirmed: boolean, anyWaiting: boolean }, chartPrepared: boolean } | null}
 *
 * @example
 *   processRailwayPNR({
 *     pnr: "1234567890",
 *     train: { number: "12301", name: "Rajdhani Express", from: "NDLS", to: "HWH" },
 *     classBooked: "3A",
 *     passengers: [
 *       { name: "Rahul", age: 28, gender: "M", booking: "B1", current: "B1" }
 *     ]
 *   })
 *   // => { pnrFormatted: "123-456-7890",
 *   //      trainInfo: "Train: 12301 - Rajdhani Express | NDLS → HWH | Class: 3A",
 *   //      passengers: [...], summary: { ..., allConfirmed: true }, chartPrepared: true }
 */
export function processRailwayPNR(pnrData) {
  
}
// its passed ?
/**
 * 🚂 Indian Railway PNR Status System
 *
 * IRCTC ka PNR status system bana! PNR data milega with train info,
 * passengers, aur current statuses. Tujhe ek complete status report
 * generate karna hai with formatted output aur analytics.
 *
 * pnrData object:
 *   {
 *     pnr: "1234567890",
 *     train: { number: "12301", name: "Rajdhani Express", from: "NDLS", to: "HWH" },
 *     classBooked: "3A",
 *     passengers: [
 *       { name: "Rahul Kumar", age: 28, gender: "M", booking: "B1", current: "B1" },
 *       { name: "Priya Sharma", age: 25, gender: "F", booking: "WL5", current: "B3" },
 *       { name: "Amit Singh", age: 60, gender: "M", booking: "WL12", current: "WL8" }
 *     ]
 *   }
 *
 * Status rules (based on current field):
 *   - Starts with "B" or "S" (berth/seat) => status = "CONFIRMED"
 *   - Starts with "WL" => status = "WAITING"
 *   - Equals "CAN" => status = "CANCELLED"
 *   - Starts with "RAC" => status = "RAC"
 *
 * For each passenger generate:
 *   - formattedName: name.padEnd(20) + "(" + age + "/" + gender + ")"
 *   - bookingStatus: booking field value
 *   - currentStatus: current field value
 *   - statusLabel: one of "CONFIRMED", "WAITING", "CANCELLED", "RAC"
 *   - isConfirmed: boolean (true only if statusLabel === "CONFIRMED")
 *
 * Summary (use array methods on processed passengers):
 *   - totalPassengers: count of passengers
 *   - confirmed: count of CONFIRMED
 *   - waiting: count of WAITING
 *   - cancelled: count of CANCELLED
 *   - rac: count of RAC
 *   - allConfirmed: boolean - every passenger confirmed? (use every)
 *   - anyWaiting: boolean - some passenger waiting? (use some)
 *
 * Other fields:
 *   - chartPrepared: true if every NON-CANCELLED passenger is confirmed
 *   - pnrFormatted: "123-456-7890" (3-3-4 dash pattern, use slice + join or concatenation)
 *   - trainInfo: template literal =>
 *     "Train: {number} - {name} | {from} → {to} | Class: {classBooked}"
 *
 * Hint: Use padEnd(), slice(), join(), map(), filter(), every(), some(),
 *   startsWith(), template literals, typeof, Array.isArray()
 *
 * Validation:
 *   - Agar pnrData object nahi hai ya null hai, return null
 *   - Agar pnr string nahi hai ya exactly 10 digits nahi hai, return null
 *   - Agar train object missing hai, return null
 *   - Agar passengers array nahi hai ya empty hai, return null
 *
 * @param {object} pnrData - PNR data object
 * @returns {{ pnrFormatted: string, trainInfo: string, passengers: Array<{ formattedName: string, bookingStatus: string, currentStatus: string, statusLabel: string, isConfirmed: boolean }>, summary: { totalPassengers: number, confirmed: number, waiting: number, cancelled: number, rac: number, allConfirmed: boolean, anyWaiting: boolean }, chartPrepared: boolean } | null}
 *
 * @example
 *   processRailwayPNR({
 *     pnr: "1234567890",
 *     train: { number: "12301", name: "Rajdhani Express", from: "NDLS", to: "HWH" },
 *     classBooked: "3A",
 *     passengers: [
 *       { name: "Rahul", age: 28, gender: "M", booking: "B1", current: "B1" }
 *     ]
 *   })
 *   // => { pnrFormatted: "123-456-7890",
 *   //      trainInfo: "Train: 12301 - Rajdhani Express | NDLS → HWH | Class: 3A",
 *   //      passengers: [...], summary: { ..., allConfirmed: true }, chartPrepared: true }
 */
export function processRailwayPNR(pnrData) {
  
}
// its passed ?
