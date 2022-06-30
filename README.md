# Timezone Application

### Track Zone Poroject Overview
- User can set their own time and timezone, this clock can't be deleted only be edited
- User can careate as many clock as they want
    - > Each Clock has their own title or name
    - > Own Timezone
    - > Simple Events with time
    - > Time difference between users timezone and clock timezone in hour and minute
- User can edit or delete a clock
- Timezone could be UTC(standard), GMT, PST, EST
- Only dat-fns library is allowed for this project, rest of the logic should write be yourself
- Every data must be validate

### What to submit?
- [x] A proper breakdown of the requirements
- [x] Component Tree and Data Flow
- [x] Finally, Proper use of components and custom hooks

### Requirement Breakdown
We will have a local clock and a list of clock

##### Clock Object Will look like
- > id
- > title
- > timezone
  - > type(UTC, GMT, PST, EST)
  - > offset
  - > date
- > events[event, event, event]

##### Event Object Will Look Like
- > id
- > clockId
- > text
- > startTime
- > endTime
- > timezone


We will use a click object for local clock. And use an array of clocks for other cocks. We will use event id to crate events inside


#### Clock Features

- [x] Properties
- [x] Update Clock
- [x] Date clock
- [x] Calculate difference
- [x] update events

#### Events Features

- [ ] Properties
- [ ] create event
- [ ] delete event
- [ ] update event
- [ ] filter events by clock
- [ ] get event by id
- [ ] get events by ids


### Project Diagram

[Timezone Track Application UML Diagram](https://drive.google.com/file/d/14MUg6cc2ccrUzvcYwaZfXs-26qy94-hf/view?usp=sharing)