<StyledCateringFormContainer>
    <StyledCateringForm>
        <label htmlFor="firstName"></label>
            <StyledInput 
                type="text" 
                name="firstName" 
                placeholder="First Name" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} />
            <label htmlFor="lastName"></label>
            <StyledInput 
                type="text" 
                name="lastName" 
                placeholder="Last Name" 
                value={lastName} 
                onChange={(e) =setLastName(e.target.value)} />
            <br />
            <label htmlFor="phoneNumber"></label>
            <StyledInput 
                type="text" 
                name="phoneNumber" 
                placeholder="Phone Number" 
                value={phoneNumber} 
                onChange={(e=> setPhoneNumber(e.target.value)}/>
            <label htmlFor="email"></label>
            <StyledInput 
                type="email" 
                name="email" 
                placeholder="Email" 
                defaultValue={email} 
                onChange={(e) => setEma(e.target.value)}/>
            <StyledFieldSet>
                <legend>Contact Type</legend>
                <label>
                    <input type="radio" value="The Lieutant" name="packageType" onChange={(e) => setPackageType(target.value)} />
                    The Lieutant
                </label>
                <label>
                    <input type="radio" value="The Captain" name="packageType" onChange={(e) => setPackageType(target.value)} />
                    The Captain
                </label>
                <label>
                    <input type="radio" value="The Sargeant" name="packageType" onChange={(e) => setPackageType(target.value)} />
                    The Sargeant
                </label>
            </StyledFieldSet>
            <label htmlFor="peopleAttending"></label>
            <StyledInput 
                type="text" 
                name="peopleAttending" 
                placeholder="How many people for your event?" 
                value={peopleAttending}
                onChange={(e) => setPeopleAttending(e.target.value)} />
            <label htmlFor="budget"></label>
            <StyledInput 
                type="text" 
                name="budget" 
                placeholder="What is your budget for your event?" 
                value={budget} 
                onChange={(e) =setBudget(e.target.value)} />
            <label htmlFor="eventDate"></label>
            <StyledInput 
                type="text" 
                name="eventDate" 
                placeholder="Date of your event" 
                value={eventDate} 
                onChange={(e) =setEventDate(e.target.value)} />
            <StyledFieldSet>
                <legend>Contact Type</legend>
                <label>
                    <input type="radio" value="1" name="additionalHours" onChange={(e) => setAdditionalHours(target.value)} />
                    1 Additional Hour
                </label>
                <label>
                    <input type="radio" value="2" name="additionalHours" onChange={(e) => setAdditionalHours(target.value)} />
                    2 Additional Hours
                </label>
                <label>
                    <input type="radio" value="3" name="packageType" name="additionalHours" onChange={(e) => setAdditionalHours(target.value)} />
                    3 Additional Hours
                </label>
                <label>
                    <input type="radio" value="4" name="packageType" name="additionalHours" onChange={(e) => setAdditionalHours(target.value)} />
                    4 Additional Hours
                </label>
            </StyledFieldSet>
            <label htmlFor="location"></label>
            <StyledInput 
                type="text" 
                name="location" 
                placeholder="What is the event for your location?" 
                value={location} 
                onChange={(e) =setLocation(e.target.value)} />
            <StyledLabel htmlFor="message">Message:</StyledLabel>
            <br />
            <StyledTextArea name="message" placeholder="Pleae provide us with any additional info you think may help us better serve your catering request" defaultValue={message} onChange={(e) => setMessage(e.target.value)}/>
            <StyledFieldSet>
                <legend>Payment Type</legend>
                <label>
                    <input type="radio" value="The Lieutant" name="paymentType" onChange={(e) => setPaymentType(target.value)} />
                    Cash
                </label>
                <label>
                    <input type="radio" value="The Captain" name="paymentType" onChange={(e) => setPaymentType(target.value)} />
                    Venmo
                </label>
                <label>
                    <input type="radio" value="The Sargeant" name="paymentType" onChange={(e) => setPaymentType(target.value)} />
                    Card
                </label>
            </StyledFieldSet>
            <StyledError><p>Error Message</p></StyledError>
            <StyledButton onClick={addCateringForm}>Submit Contact</StyledButton>
    </StyledCateringForm>
</StyledCateringFormContainer>