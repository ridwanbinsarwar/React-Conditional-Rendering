# React-Conditional-Rendering

### type 1
```javascript
   <If condition={value === 5}>
       <Then>
           <Component/>
       </Then>
   </If>
```

```javascript
   <If condition={loading}>
       <Then>
           <Loader/>
       </Then>
       <Else>
           <Component>
       </Else>
   </If>
```

### type 2
```javascript
    <IF condition={!loading}>
         <Componenet/>
    </IF>
```
